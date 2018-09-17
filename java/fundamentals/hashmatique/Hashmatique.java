import java.util.*;

public class Hashmatique {
    public void trackIteration() {
    	HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Blackbird", "calling in the dead of night");
        trackList.put("Revolution", "you say you want a");
        trackList.put("Eleanor Rigby", "picks up the rice");
        trackList.put("Help!", "I need somebody");
        String singleTrack = trackList.get("Help!");
        System.out.println("The lyrics are " + singleTrack);
        Set<String> tracks = trackList.keySet();
        for(String track : tracks) {
        	System.out.println(track);
        	System.out.println(trackList.get(track));
        }
    }
}