require 'test_helper'

class RpgControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rpg_index_url
    assert_response :success
  end

  test "should get result" do
    get rpg_result_url
    assert_response :success
  end

  test "should get farm_process" do
    get rpg_farm_process_url
    assert_response :success
  end

  test "should get cave_process" do
    get rpg_cave_process_url
    assert_response :success
  end

  test "should get house_process" do
    get rpg_house_process_url
    assert_response :success
  end

  test "should get casino_porcess" do
    get rpg_casino_porcess_url
    assert_response :success
  end

end
