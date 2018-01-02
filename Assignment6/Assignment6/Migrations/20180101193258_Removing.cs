using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Assignment6.Migrations
{
    public partial class Removing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Progression_Exercise_ExerciseId",
                table: "Progression");

            migrationBuilder.DropIndex(
                name: "IX_Progression_ExerciseId",
                table: "Progression");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           
            migrationBuilder.CreateIndex(
                name: "IX_Progression_ExerciseId",
                table: "Progression",
                column: "ExerciseId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Progression_Exercise_ExerciseId",
                table: "Progression",
                column: "ExerciseId",
                principalTable: "Exercise",
                principalColumn: "ExerciseId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
