const Header = () => {
    return (
        <div id='header'>
            <div className='left-side-header'>
                <ul style={{ listStyleType: "none" }}>
                    <li id='edyoda-text'>Edyoda</li>
                    <li id='stories-text'>Stories</li>
                </ul>
                <span className='explore-categories'> Explore Categories</span>
                <i class="fa-solid fa-angle-down"></i>
                
            </div>

            <div className='right-side-header'>
            <p className='edyoda-description'> EdYoda is a learning and knowledge <br></br>
                sharing platform for techies </p>
            <button className='main-website-btn'> Go to Main Website </button>
            </div>
        </div>
    )
}

export default Header;
