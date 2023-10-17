import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Signin from '../views/Signin'
import Signup from '../views/Signup'
import PostAd from "../views/PostAd";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/signin",
                element: <Signin/>
            },
            {
                path: "/postad",
                element: <PostAd/>
            },
            {
                path: "/postad/:id",
                element: <Detail/>
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return (
        <div>
            <div style={{ backgroundColor: 'beige', padding: '10px' }}>
                <img style={{ marginLeft: '100px' }} width={50} src="https://brandlogos.net/wp-content/uploads/2022/07/olx-logo_brandlogos.net_ijizj.png" />
                <a style={{ marginLeft: '70px', fontSize: 'large', color: 'black', textDecoration: 'none' }} href="https://www.olx.com.pk/motors/">MOTORS</a>
                <a style={{ marginLeft: '70px', fontSize: 'large', color: 'black', textDecoration: 'none' }} href="https://www.olx.com.pk/properties/">PROPERTY</a><br />
                <img style={{ marginLeft: '100px' }} width={80} src="https://theme.zdassets.com/theme_assets/10470416/17adca52854a5052e1b4e6b9d2835917859c8de9.jpg" />
                <select style={{ width: '20%', height: '50px', margin: '20px', fontSize: 'x-large' }} name="group" id="group">
                    <option>Pakistan</option>
                    <option>Sindh,Pakistan</option>
                    <option>Punjab,Pakistan</option>
                    <option>Balochistan,Pakistan</option>
                    <option>khyberPakhtunkhwa,Pakistan</option>
                </select>
                <input style={{ width: '30%', height: '50px', margin: '20px', fontSize: 'x-large' }} type="text" placeholder="Find Car,Mobile Phones and more " size={30} />
                <button onClick={()=>navigate('/signin')}  style={{ padding: '10px', fontSize: 'x-large', border: '1px solid black', borderRadius: '10px', marginRight: '10px', color: 'black', textDecoration: 'none' }}>Login</button>
                <button onClick={()=>navigate('/postad')}  style={{ padding: '10px', fontSize: 'x-large', border: '1px solid black', borderRadius: '10px', marginRight: '10px', color: 'black', textDecoration: 'none' }}>Sell</button>

               

            </div>
            <br/>

            <Outlet />

            <div style={{ backgroundColor: 'beige', padding: '10px' }} >
                <div style={{ display: "inline-block", marginLeft: '30px' }} >
                    <h2>POPULAR CATEGORIES</h2>
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Cars</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Flats for rent</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Mobile Phones</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Jobs</a><br />
                </div>

                <div style={{ display: "inline-block", marginLeft: '80px' }} >
                    <h2>TRENDING SEARCHES</h2>
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Bikes</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Watches</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Books</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Dogs</a><br />
                </div>

                <div style={{ display: "inline-block", marginLeft: '80px' }} >
                    <h2>ABOUT US</h2>
                    <a style={{ color: "black", textDecoration: 'none' }} href="">About Dubizzle Group</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">OLX Blog</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Contact Us</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">OLX For Businesses</a><br />
                </div>

                <div style={{ display: "inline-block", marginLeft: '80px' }} >
                    <h2>OLX</h2>
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Help</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Sitemap</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Terms of use</a><br />
                    <a style={{ color: "black", textDecoration: 'none' }} href="">Privacy Policy</a><br />
                </div>

                <div style={{ display: "inline-block", marginLeft: '50px' }}>
                    <h3>FOLLOW US</h3>
                    <img width={80} src='https://independenceinc.org/wp-content/uploads/social-media-icons.jpg' /><br />
                    <img width={100} src='https://miro.medium.com/v2/resize:fit:816/1*sSR4mrpijxoQrD7HKu8nDw.png' />
                </div>



            </div>



        </div>)
}

export default Router