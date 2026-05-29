function Footer() {
  return (
    <footer className="py-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center text-slate-400">
        © {new Date().getFullYear()} Lina Oeu.
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;