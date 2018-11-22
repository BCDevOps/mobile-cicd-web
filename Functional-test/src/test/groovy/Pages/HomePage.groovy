import geb.Page

class GebishOrgHomePage extends Page {

    static at = { title == "Geb - Very Groovy Browser Automation" }

    static content = {
        toggle { $("div.menu a.manuals") }
        linksContainer { $("#manuals-menu") }
        links { linksContainer.find("a") }
    }

    void open() {
        toggle.click()
        waitFor { !linksContainer.hasClass("animating") }
    }
}
