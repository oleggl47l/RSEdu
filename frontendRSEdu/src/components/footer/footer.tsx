import './footerStyle.css';
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="#"><img src="src/images/vk.svg" alt="Social Icon 1"/></a>
                <a href="#"><img src="src/images/telegram.svg" alt="Social Icon 2"/></a>
                <a href="#"><img src="src/images/discord.svg" alt="Social Icon 3"/></a>
            </div>
            <div className="copyright">© 2024 something</div>
        </footer>
    );
};