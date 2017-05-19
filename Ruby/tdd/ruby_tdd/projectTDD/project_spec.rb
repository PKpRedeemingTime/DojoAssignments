require_relative 'project'
RSpec.describe Project do
    before(:each) do
        @project1 = Project.new('Project 1', 'description 1', 'John Doe')
        @project2 = Project.new('Project 2', 'description 2', 'Jane Doe')
    end
    it 'has a getter and setter for name attribute and owner attribute' do
        @project1.name = "Changed Name"
        expect(@project1.name).to eq("Changed Name")
        @project1.owner = "Jim Doe"
        expect(@project1.owner).to eq("Jim Doe")
    end 
    it 'has a method elevator_pitch to explain name, description, and owner' do
        expect(@project1.elevator_pitch).to eq("Project 1, description 1, John Doe")
        expect(@project2.elevator_pitch).to eq("Project 2, description 2, Jane Doe")
    end
    it 'has a method add_tasks that will push a task into an array' do
        @project1.tasks = "Add test"
        expect(@project1.tasks).to eq("Add test")
    end
end