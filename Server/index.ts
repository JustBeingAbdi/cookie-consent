import express from "express";
import path from "path";
import bodyparser from "body-parser";
import ExpressLogger from "leekslazylogger-express";
import ejs from "ejs";
import * as Config from "./../Config";

export class Server {
    public async init(port): Promise<any> {
        if(!Config.redirecturl) return console.log("Config hasn't been setup. Aborting...");
        let app = express();
        const log = new ExpressLogger({
    name: 'Cookie Consent',
});

    app.use(bodyparser.json());
    app.use(log.express());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.engine("html", ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, "./../views"));
    
    app.set('trust proxy', true);
    


    app.get("/", async(req, res) => {
        res.render("index", {
            config: Config
        });
    });
    app.get("/reset", async(req, res) => {
        res.render("reset");
    })
    

    app.listen(port);
        console.log('Webserver online on port ' + port);



    }
}
