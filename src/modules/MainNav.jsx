import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function MainNav(){
    return (
        <BrowserRouter>
            <div className="Header">
                <div class="frame">
                    <nav class="frame__links link-1">
                        <Link to = "/service"><span>Service</span></Link>
                        <span>|</span>
                        <Link to ="/subscribe"><span>Subscribe</span></Link>
                        <span>|</span>
                        <Link to ="/about"><span>About us</span></Link>
                    </nav>
                </div>
            </div>
            <Route path="/service" element={<SERVICE />} />
            <Route path="/subscribe" element={<SUBSCRIBE />} />
            <Route path="/about" element={<ABOUT />} />
            
        </BrowserRouter>
        
    );
}

export default MainNav;