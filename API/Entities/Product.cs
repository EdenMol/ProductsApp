namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }

        public void copyProductProperties(Product product)
        {
            Title = product.Title;
            Details = product.Details;
        }
    }
}