import Button from "./UI/Button.jsx";

import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-12 px-[10%]">
      <div className="flex gap-4 items-center">
        <img
          src={logo}
          alt="website-logo"
          className="w-16 h-16 object-contain rounded-[50%] border-[2px solid #ffc404]"
        />
        <h1>Food4Developers</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
