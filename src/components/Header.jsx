import React from "react";

export default function Header() {
    return (
        <header>
            <nav>
                <img class="logo" src="src/assets/vallastadenpizzeria_logo.png" alt="logo" />
                <a href="index.html">
                Hem
                </a>
                <a href="daily-lunch.html">
                Dagens lunch
                </a>
                <a href="menu.html">
                Meny
                </a>
                <a href="find-us.html">
                Hitta oss
                </a>
                <a href="order.html">
                Beställ
                </a>
                <a href="gallery.html">
                Galleri
                </a>
            </nav>
        </header>
    );
}