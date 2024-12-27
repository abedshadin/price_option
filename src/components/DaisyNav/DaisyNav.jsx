import Link from "./Link/Link";

const DaisyNav = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/profile/:id', name: 'Profile' },
        { id: 5, path: '*', name: 'NotFound' },
      ];
 
      
    return (
        <nav>
            {routes.map((route) => <Link key={route.id} route={route} />)}
        </nav>
    );
};

export default DaisyNav;