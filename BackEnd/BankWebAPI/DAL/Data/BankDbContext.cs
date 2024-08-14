using System;
using System.Collections.Generic;
using BankWebAPI.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace BankWebAPI.DAL.Data;

public partial class BankDbContext : DbContext
{
    public BankDbContext()
    {
    }

    public BankDbContext(DbContextOptions<BankDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bank> Banks { get; set; }

    public virtual DbSet<Branch> Branches { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=Bank_DB;Username=postgres;Password=root");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bank>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Bank_pkey");

            entity.ToTable("Bank");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.BankName).HasColumnName("Bank_Name");
        });

        modelBuilder.Entity<Branch>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Branch_pkey");

            entity.ToTable("Branch");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("ID");
            entity.Property(e => e.BankId).HasColumnName("Bank_ID");
            entity.Property(e => e.BranchName).HasColumnName("Branch_Name");
            entity.Property(e => e.IfscCode).HasColumnName("IFSC_Code");
            entity.Property(e => e.MicrCode).HasColumnName("MICR_Code");
            entity.Property(e => e.PinCode).HasColumnName("Pin_Code");

            entity.HasOne(d => d.Bank).WithMany(p => p.Branches)
                .HasForeignKey(d => d.BankId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Bank_ID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
