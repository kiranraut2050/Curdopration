using Microsoft.EntityFrameworkCore;

namespace EmpolyeeManagement_system.Model
{
    public class EMPdbcontext:DbContext
    {
        public EMPdbcontext(DbContextOptions<EMPdbcontext>options):base(options) 
        {

        }

        public DbSet<Emp> emps { get; set; }
    }
}
