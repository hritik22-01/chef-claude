import chefClaudeLogo from "/Images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="Chef Claude Image" />
            <h1>Chef Claude</h1>
        </header>
    )
}