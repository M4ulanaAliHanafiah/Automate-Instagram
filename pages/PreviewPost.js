import * as utilities from "../utilities/akun.json";

class Instagram{
    constructor(page) {
        this.page = page;
        this.url = utilities.url;
        this.UserName = "//*[@id='loginForm']/div/div[1]/div/label/input";
        this.Password = "//*[@id='loginForm']/div/div[2]/div/label/input"
        this.buttonLogin = "//*[@id='loginForm']/div/div[3]";
        this.buttonSearch = "//*[@id='mount_0_0_Pi']/div/div/div[2]/div/div/div[1]/div[1]/div[1]/div/div/div/div/div[2]/div[2]/span/div/a/div";
        this.TextFieldSearch = "//*[@id='mount_0_0_Pi']/div/div/div[2]/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div[1]/div/div/input";
        this.FirstAkun = "//*[@id='mount_0_0_Pi']/div/div/div[2]/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div/a[1]/div[1]/div/div/div[2]/div/div"
        this.FirstPost = "//*[@id='mount_0_0_yQ']/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/section/main/div/div[2]/div/div[1]/div[1]/a/div[1]/div[2]"
        this.DetailFirstPost = "/html/body/div[7]/div[1]/div/div[3]/div"
    }

    async PostInstagram() {
        await this.page.goto(this.url);
        await this.page.fill(this.UserName, utilities.username, { timeout: 60000 });
        await this.page.fill(this.Password, utilities.password, { timeout: 60000 });
        await this.page.click(this.buttonLogin, { timeout: 60000 });
        await this.page.click(this.buttonSearch, { timeout: 60000 });
        await this.page.fill(this.TextFieldSearch, utilities.akun, { timeout: 60000 });
        await this.page.click(this.FirstAkun, { timeout: 60000 });
        await this.page.click(this.FirstPost, { timeout: 60000 });
        await this.page.locator(this.DetailFirstPost).screenshot({ path: 'Postingan.png' });
    }
}

module.exports = {Instagram};