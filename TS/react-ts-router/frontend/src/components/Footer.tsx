const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center w-full h-10">
      Przymencki &copy; {year}
    </footer>
  );
};

export default Footer;
