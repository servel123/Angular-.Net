using CRUD.API.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace CRUD_ASP.Data
{

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Student> students { get; set; }
    
    }
}
