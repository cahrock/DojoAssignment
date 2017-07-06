import java.util.ArrayList;

public class ProjectPortfolio{
    private ArrayList<Project> projects = new ArrayList<>();
    public ProjectPortfolio(){

    }

    public void addProject(Project project){
        projects.add(project);
    }

    public ArrayList<Project> getProject(){
        return projects;
    }

    public int getPortfolioCost(){
        int sum = 0;
        for( int i = 0; i < projects.size(); i++){
            sum += projects.get(i).getCost();
        }
        return sum;
    }

    public void showPortfolio(){
        for( int i = 0; i < projects.size(); i++){
            projects.get(i).elevatorPitch();
        }
        System.out.println("Total Cost: $"+this.getPortfolioCost());
        // this.getPortfolioCost();
    }
}
