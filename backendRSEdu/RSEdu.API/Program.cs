using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using RSEdu.Application.Configurations;
using RSEdu.Application.Interfaces;
using RSEdu.Application.Services;
using RSEdu.DataAccsess;
using RSEdu.DataAccsess.Interfaces;
using RSEdu.DataAccsess.Models;
using RSEdu.DataAccsess.Repositories;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

string connection =
    builder.Configuration.GetConnectionString("RSEduDbContext") ?? string.Empty;
builder.Services.AddDbContext<RSEduDbContext>(options => options.UseNpgsql(connection));


builder.Services.AddScoped<ICRUDService<Role>, RoleCRUDService>();
builder.Services.AddScoped<IRepository<Role>, RoleRepository>();

builder.Services.AddScoped<ICRUDService<Group>, GroupCRUDService>();
builder.Services.AddScoped<IRepository<Group>, GroupRepository>();

builder.Services.AddScoped<ICRUDService<User>, UserCRUDService>();
builder.Services.AddScoped<IRepository<User>, UserRepository>();

builder.Services.AddScoped<UserRegistrationService>();
builder.Services.AddScoped<TeacherRegistrationService>();
builder.Services.AddScoped<AuthService>();

builder.Services.AddSwaggerGen(opt => {
    opt.SwaggerDoc("v1", new OpenApiInfo { Title = "BookStore", Version = "v1" });
    opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme {
        In = ParameterLocation.Header,
        Description = "Please enter token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });
    opt.AddSecurityRequirement(new OpenApiSecurityRequirement {
        {
            new OpenApiSecurityScheme {
                Reference = new OpenApiReference {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] { }
        }
    });
});

builder.Services.AddAuthorization(options => {
    options.AddPolicy("Admin", policy => policy.RequireRole("Admin"));
    options.AddPolicy("User", policy => policy.RequireRole("User"));
    options.AddPolicy("Teacher", policy => policy.RequireRole("Teacher"));
    options.AddPolicy("AdmTeach", policy =>
        policy.RequireRole("Admin", "Teacher"));
});
builder.Services.AddAuthentication(options => {
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
    options.TokenValidationParameters = new TokenValidationParameters {
        ValidateIssuer = true,
        ValidIssuer = AuthConfig.ISSUER,
        ValidateAudience = true,
        ValidAudience = AuthConfig.AUDIENCE,
        ValidateLifetime = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AuthConfig.KEY)),
        ValidateIssuerSigningKey = true,
    };
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(x => {
    x.WithHeaders().AllowAnyHeader();
    x.WithOrigins("http://localhost:5173");
    x.WithMethods().AllowAnyMethod();
});

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();