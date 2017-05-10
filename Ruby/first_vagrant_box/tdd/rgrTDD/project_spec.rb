require_relative 'project'
RSpec.describe Project do
    before(:each) do
        @project = Project.new('Project', 'Description')
    end
    it "has a getter and setter for name and description attributes" do
        @project.name = "New Name"
        @project.description = "New Description"
        expect(@project.name).to eq("New Name")
        expect(@project.description).to eq("New Description")
    end
    it 'has a method elevator_pitch to explain name and description' do
        expect(@project.elevator_pitch).to eq("Project, Description")
    end
end