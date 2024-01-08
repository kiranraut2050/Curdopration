using System.ComponentModel.DataAnnotations;

namespace EmpolyeeManagement_system.Model
{
    public class Emp
    {
        public int Id { get; set; }
       
        [Required]
        public string EmpName { get; set; }
        [Required]
        public string EmpMobile { get; set; }
        [Required]
        public string EmpAddress { get; set; }
        [Required]
        public string  Empsalary { get; set; }
        [Required]
        public string Sex { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string MarriedStatus { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string  Working { get; set; }
    }
        
        
    
}
