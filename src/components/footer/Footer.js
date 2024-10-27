import './footer.css'; // Ensure the path to your CSS file is correct

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Royal Flavors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
