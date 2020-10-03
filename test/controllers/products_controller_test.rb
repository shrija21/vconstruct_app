require 'test_helper'

class ProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get first_product" do
    get products_first_product_url
    assert_response :success
  end

  test "should get second_product" do
    get products_second_product_url
    assert_response :success
  end

end
