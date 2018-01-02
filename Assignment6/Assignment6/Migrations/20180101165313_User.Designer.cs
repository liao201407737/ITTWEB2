﻿// <auto-generated />
using Assignment6.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Assignment6.Migrations
{
    [DbContext(typeof(Assignment6Context))]
    [Migration("20180101165313_User")]
    partial class User
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Assignment6.DataModels.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("OfficeNo");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("ApplicationUser");
                });

            modelBuilder.Entity("Assignment6.DataModels.Exercise", b =>
                {
                    b.Property<int>("ExerciseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("Reps");

                    b.Property<int>("Sets");

                    b.Property<int>("WorkoutId");

                    b.HasKey("ExerciseId");

                    b.HasIndex("WorkoutId");

                    b.ToTable("Exercise");
                });

            modelBuilder.Entity("Assignment6.DataModels.Progression", b =>
                {
                    b.Property<int>("ProgressionId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Done");

                    b.Property<int>("ExerciseId");

                    b.HasKey("ProgressionId");

                    b.HasIndex("ExerciseId")
                        .IsUnique();

                    b.ToTable("Progression");
                });

            modelBuilder.Entity("Assignment6.DataModels.Workout", b =>
                {
                    b.Property<int>("WorkoutId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("WorkoutId");

                    b.ToTable("Workout");
                });

            modelBuilder.Entity("Assignment6.DataModels.Exercise", b =>
                {
                    b.HasOne("Assignment6.DataModels.Workout")
                        .WithMany("Exercises")
                        .HasForeignKey("WorkoutId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Assignment6.DataModels.Progression", b =>
                {
                    b.HasOne("Assignment6.DataModels.Exercise")
                        .WithOne("Progression")
                        .HasForeignKey("Assignment6.DataModels.Progression", "ExerciseId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}