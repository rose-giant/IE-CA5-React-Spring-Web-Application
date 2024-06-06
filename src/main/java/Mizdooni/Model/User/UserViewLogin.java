package Mizdooni.Model.User;

import Mizdooni.Model.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserViewLogin {
    @NonNull
    private String username;
    @NonNull
    private String password;

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }
}
