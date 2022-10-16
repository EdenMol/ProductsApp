using API.Data;
using API.DTO;
using API.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _context;
        public ProductsController(DataContext context)
        {
            _context = context;
        }
        // add async for not blocking
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return products;
        }
        //api/products/3
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.Products.FindAsync(id);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateProduct(Product p)
        {
            var productFound = await _context.Products.FindAsync(p.Id);
            if (productFound == null)
            {
                return BadRequest($"Product Id: {p.Id} cannot be found.");
            }

            productFound.copyProductProperties(p);
            _context.Update(productFound);

            try
            {
                 _context.Products.Update(productFound);
                 await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            var products = await _context.Products.ToListAsync();
            return Ok(products);

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id){
            var productFound = await _context.Products.FindAsync(id);
            if (productFound == null)
            {
                return BadRequest($"Product Id: {id} cannot be found.");
            }
            try{
                 _context.Products.Remove(productFound);
                 await _context.SaveChangesAsync();
            }
             catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            var products = await _context.Products.ToListAsync();
              return Ok(products);
        }
          


    }
}