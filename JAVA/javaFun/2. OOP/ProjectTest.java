public class ProjectTest{
    public static void main(String[] args) {
        Project p = new Project();
        p.setName("test");
        p.setDescription("Here is a description");
        p.setCost(2.50f);
        p.elevatorPitch();

        Project q = new Project("test2");
        q.setCost(50.50f);
        q.elevatorPitch();

        Project r = new Project("test 3", "Description 3");
        r.setCost(15.50f);
        r.elevatorPitch();
        // System.out.println();

        ProjectPortfolio portfolio = new ProjectPortfolio();
        portfolio.addProject(p);
        portfolio.addProject(q);
        portfolio.addProject(r);

        portfolio.showPortfolio();
    }
}
