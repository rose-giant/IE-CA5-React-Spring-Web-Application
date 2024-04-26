package Mizdooni.Model;

import Mizdooni.Model.User.User;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.util.ArrayList;

public class DAO {

    public String getRequest(String url){
        final CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet request = new HttpGet(url);

        try (CloseableHttpResponse response = httpClient.execute(request)) {
            HttpEntity entity = response.getEntity();
            String result = "";
            if (entity != null)
                result = EntityUtils.toString(entity);
            return result;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

//    public ArrayList<User> getFromAPI() throws Exception{
//        String ObjectsJsonString = getRequest();
//        Gson gson = new GsonBuilder().setPrettyPrinting().create();
//        return gson.fromJson(ObjectsJsonString, new TypeToken<ArrayList<Object>>() {}.getType());
//    }
}


