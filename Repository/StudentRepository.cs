using CRUD.API.Model.Entities;
using CRUD_ASP.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;

namespace CRUD.API.Repository
{
    public class StudentRepository
    {
        private readonly AppDbContext _appDbContext;

        public StudentRepository(AppDbContext appDbContext) {
            _appDbContext = appDbContext;
        }
        public async Task AddStudentAsync (Student request)
        {
            await _appDbContext.Set<Student>().AddAsync(request);
            await _appDbContext.SaveChangesAsync();
        }
        public async Task<List<Student>> GetAllStudentAsync()
        {
            return await _appDbContext.students.ToListAsync();
        }
        public async Task<Student> GetStudentById(int Id)
        {
            return await _appDbContext.students.FindAsync(Id);
        }
        public async Task UpdateStudent(Student model, int Id)
        {
            var student = await _appDbContext.students.FindAsync(Id);
            if(student == null){
                throw new Exception("Student not found!");
            }
           student.Name = model.Name;
           student.DoB = model.DoB;
           student.Address = model.Address;
           student.PhoneNum = model.PhoneNum;
            await _appDbContext.SaveChangesAsync();
        }
        public async Task DeleteStudent(int Id)
        {
            var student = await _appDbContext.students.FindAsync(Id);
            if (student == null)
            {
                throw new Exception("Student not found!");
            }
            _appDbContext.students.Remove(student);
            await _appDbContext.SaveChangesAsync();
        }

        
    }
}
