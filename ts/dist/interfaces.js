class User {
}
class EmailAuth {
    authenticate(username, password) {
        console.log("Je m'authentifie via l'email");
        let user = new User();
        user.username = 'toto';
        user.age = 50;
        return user;
    }
}
class FacebookAuth {
    authenticate(username, password) {
        console.log("Je m'authentifie via facebouque");
        return new User();
    }
}
class AuthManager {
    connect() {
        this.handler.authenticate('toto', '1234');
    }
}
let manager = new AuthManager();
// manager.handler = new EmailAuth();
manager.handler = new FacebookAuth();
manager.connect();
