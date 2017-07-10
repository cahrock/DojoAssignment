public class HumanTest{
    public static void main(String[] args) {
        Wizard raf = new Wizard("Raf");
        Human eugene = new Human("Eugene");
        Ninja marco = new Ninja("Marco");
        Samurai tim = new Samurai("tim");

        raf.attack(eugene);
        raf.fireBall(eugene);
        raf.heal(eugene);
        marco.steal(raf);
        tim.deathBlow(raf);
        System.out.println(Samurai.howMany());
    }
}
