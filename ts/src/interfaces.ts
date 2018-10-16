
class User {
    username: string;
    password: string;
    age: number;
}

interface Authenticable {
    authenticate(username: string, password: string): User;
}

class EmailAuth implements Authenticable {
    authenticate(username: string, password: string): User {
        console.log("Je m'authentifie via l'email");

        let user = new User();
        user.username = 'toto';
        user.age = 50;

        return user;
    }
}

class FacebookAuth implements Authenticable {
    authenticate(username: string, password: string): User {
        console.log("Je m'authentifie via facebouque");
        return new User();
    }
}

class AuthManager {
    handler: Authenticable;

    connect() {
        this.handler.authenticate('toto', '1234');
    }
}

let manager = new AuthManager();
// manager.handler = new EmailAuth();
manager.handler = new FacebookAuth();
manager.connect();
