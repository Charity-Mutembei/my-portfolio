import './index.scss'
// import logoS from '../../assets/images/top.png'

const Sidebar = () => {
    return (
       <>
       <nav class="navbar navbar-light">
        <div class="sideBar">
            <div class="row">
                <div class="col">
                <a class="navbar-brand" href="/">
                    {/* <img  width="120px" height="120px" alt="" class="name2" /> */}
                    <span class="name"></span>
                </a>
                </div>
                <div class="col">
                    <a href="/">
                    <h1 class="name1">Home</h1>
                    </a>
                </div>
                <div class="col">
                    <a href="/">
                    <h1 class="name">Projects</h1>
                    </a>
                </div>
                <div class="col">
                    <a href="/">
                    <h1 class="name">Profile</h1>
                    </a>
                </div>
                <div class="col">
                    <a href="/">
                    <h1 class="name" id="end">Contact</h1>
                    </a>
                </div>
                <div class="col">
                <a href="/">
                <i class="fa-brands fa-facebook" id="name"></i>
                </a>
                </div>
                <div class="col">
                <a href="/">
                <i class="fa-brands fa-twitter" id="name"></i>
                </a>
                </div>
                <div class="col">
                <a href="/">
                <i class="fa-brands fa-instagram" id="name"></i>
                </a>
                </div>
                <div class="col">
                <a href="/">
                <i class="fa-brands fa-linkedin" id="name"></i>
                </a>
                </div>
                <div class="col">
                <a href="/">
                <i class="fa-brands fa-whatsapp" id="name"></i>
                </a>
                </div>





            </div>
        </div>

        </nav>
         
       </>      
    )
}

export default Sidebar