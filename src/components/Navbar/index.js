import './index.scss'

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light" >
            <div class="container-fluid">
                <a class="navbar-brand" href="/" id="navbar1">Lets hope you like what you see ...</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar2">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/" id="navbar">Home</a>
                    </li>
                    <li class="nav-item active">
                    <a class="nav-link" href="/" id="navbar">About</a>
                    </li>
                    <li class="nav-item active">
                    <a class="nav-link" href="/" id="navbar">Projects</a>
                    </li>
                    <li class="nav-item active">
                    <a class="nav-link" href="/" id="navbar">Resume</a>
                    </li>
                    <li class="nav-item active">
                    <a class="nav-link" href="/" tabindex="-1" aria-disabled="true" id="navbar7">Contacts</a>
                    </li>
                    <li class="nav-item">
                    <a href="/">
                     <i class="fa-brands fa-facebook" id="name"></i>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/">
                    <i class="fa-brands fa-twitter" id="name"></i>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/">
                    <i class="fa-brands fa-instagram" id="name"></i>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/">
                    <i class="fa-brands fa-linkedin" id="name"></i>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/">
                    <i class="fa-brands fa-whatsapp" id="name"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar