public class Ninja extends Human {
    public Ninja(){this.setStealth(10);}
    public Ninja(String name){
        super(name);
    }

    public void steal(Human human){
        int diff = human.getHealth()-this.getStealth();
        human.setHealth(diff);
        this.setHealth(this.getHealth()+diff);
        System.out.println(this.getName()+" loss "+diff+" health "+this.getName()+" get health ");
    }
}
