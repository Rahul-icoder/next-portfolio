const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 text-gray-400 text-sm">
      &copy; {year} rahulkushwaha.com
    </footer>
  );
};

export default Footer;
