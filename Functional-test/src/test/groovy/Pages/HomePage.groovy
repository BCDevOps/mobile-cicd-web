import geb.Page
import java.util.regex.*

class HomePage extends Page {
  // sample:
  static at = { title == "" }

  static content = {
    toggle { $("div.menu a.manuals") }
    linksContainer { $("#manuals-menu") }
    links { linksContainer.find("a") }
  }

  def toggle(index){
    return { $("div.menu".find(index)) }
  }

  void toggle() {
    toggle.click()
    waitFor { !linksContainer.hasClass("animating") }
  }

}
