package Mizdooni.Model.User;

import Mizdooni.Model.Constants;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;

public class UserDAO {

    public static String getRequest(String Url) throws Exception{
        URL url = new URL(Url);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();

        //Check if connect is made
        int responseCode = conn.getResponseCode();

        // 200 OK
        if (responseCode != 200) {
            throw new RuntimeException("HttpResponseCode: " + responseCode);
        } else {
            StringBuilder informationString = new StringBuilder();
            Scanner scanner = new Scanner(url.openStream());
            while (scanner.hasNext()) {
                informationString.append(scanner.nextLine());
            }
            scanner.close();
            return informationString.toString();
        }
    }
    public ArrayList<User> getFromAPI() throws Exception{
        String UsersJsonString = getRequest(Constants.GET_USERS_URL);
//        String UsersJsonString ="[{\"address\":{\"city\":\"Pittsburgh\",\"country\":\"US\"},\"email\":\"ali@gmail.com\",\"password\":\"ali_1234\",\"role\":\"manager\",\"username\":\"ali\"}]";
        ObjectMapper om = new ObjectMapper();
        return om.readValue(UsersJsonString, new TypeReference<ArrayList<User>>(){});
    }
}
