import React, { useRef } from 'react';

// css
import './Menu.css';

const Menu = () => {

    // localización del botón con useRef 'equivalente a document.getElementBy'
    const menuRef = useRef();

    const showMenu = () => {
        menuRef.current.classList.toggle('menu--show');
    }

    // Oculta el menú al hacer click en una sección
    const handleMenu = e => {

        const childrens = Array.from( e.target.parentElement.parentElement.children) ;
    
        childrens.forEach( child => {
            if( child.className === 'menu-item active'){
                child.classList.remove('active');
            }
        });

        e.target.parentElement.classList.add('active');
        menuRef.current.classList.remove('menu--show');
    }


    return (
        <>
        <header className="header">
            <nav className="nav">
                <a href="#home" className="logo">Tu Logo</a>

                <div className="top-bar">
                    <div 
                        className="icon-menu"
                        onClick={ showMenu }
                    >
                        <div 
                            className="icon-menu-bar"
                        ></div>
                    </div>
                </div>
                <ul 
                    className="menu"
                    ref={ menuRef }
                    onClick={ handleMenu }
                >
                    <li className="menu-item">
                        <a href="#seccion1" className="menu-item-link">Sección 1</a>
                    </li>

                    <li className="menu-item">
                        <a href="#seccion2" className="menu-item-link fadein">Sección 2</a>
                    </li>

                       <li className="menu-item">
                        <a href="#seccion3" className="menu-item-link">Sección 3</a>
                    </li>
                </ul>
            </nav>
        </header>

        <main className="main">
            <h1 className="title">Menú Responsive en React</h1>
            <section className="seccion" id="seccion1">
                <h1>Sección 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sint! Nemo ea expedita beatae voluptate est sunt culpa quasi dolore impedit. Tempora sunt amet quam repellendus, quibusdam ipsum quasi asperiores?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>
            </section>

            <section className="seccion" id="seccion2">
                <h1>Sección 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sint! Nemo ea expedita beatae voluptate est sunt culpa quasi dolore impedit. Tempora sunt amet quam repellendus, quibusdam ipsum quasi asperiores?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>
            </section>

            <section className="seccion" id="seccion3">
                <h1>Sección 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, sint! Nemo ea expedita beatae voluptate est sunt culpa quasi dolore impedit. Tempora sunt amet quam repellendus, quibusdam ipsum quasi asperiores?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod expedita ex voluptatum, et, similique rerum dicta ipsum ullam quas architecto rem! Veritatis harum corporis veniam repellat aperiam quod quia.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aut. Fuga placeat aliquid aut iusto dicta ea tenetur repudiandae nihil maxime quisquam nobis, dolores id ullam suscipit et eligendi dolore!</p>
            </section>
        </main>
        </>
    );
}

export default Menu;