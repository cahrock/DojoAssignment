public class Project{
    private String name;
    private String description;
    private float cost;

    public Project(){this("", "");}
    public Project(String name){this.name = name;this.description = "";}
    public Project(String name, String description){
        this.name = name;
        this.description = description;
    }

    public void setCost(float cost){
        this.cost = cost;
    }

    public float getCost(){
        return this.cost;
    }

    public void setName(String name){
        this.name = name;
    }
    public String getName(String name){
        return this.name;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescription(String description){
        return this.description;
    }
    public String elevatorPitch(){
        System.out.println(name + "("+cost+ "):" + description);
        return name + "("+cost+ "):" + description;
    }
}
