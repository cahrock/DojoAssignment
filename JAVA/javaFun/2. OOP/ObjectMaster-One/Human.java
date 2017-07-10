public class Human{
    private String name ="";
    private int strength = 3;
    private int stealth = 3;
    private int intelligence = 3;
    private int health = 100;

    public Human(){}

    public Human(String name){this.name = name;}

    public String getName(){
        return name;
    }

    public void setHealth(int health){
        this.health = health;
    }

    public int getHealth(){
        return health;
    }

    public void attack(Human human){
        human.setHealth(human.getHealth()-strength);
        System.out.println(this.getName()+ " dealt" + strength+" damage to "+human.getName());
    }

    public static void main(String[] args) {
        Human raf = new Human("Raf");
        Human eugene = new Human("Eugene");

        raf.attack(eugene);
    }
}
