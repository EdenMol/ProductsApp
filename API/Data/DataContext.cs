using API.DTO;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {            
        }
        
        public DbSet<Product> Products { get; set; }

        internal object FindElement(DbSet<Product> products, int id)
        {
             try
            {
                return products.Find(id);
            }
            catch (Exception)
            {   // If such element doesn't exist, DbSet.Find() might throw exception
                return null;
            }
        }
    }
}