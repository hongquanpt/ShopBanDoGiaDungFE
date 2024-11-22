function applyFilters() {
    const selectedCategories = [];
    const selectedBrands = [];

    $('input[name="category"]:checked').each(function () {
        selectedCategories.push($(this).val());
    });

    $('input[name="brand"]:checked').each(function () {
        selectedBrands.push($(this).val());
    });

    const maxPrice = $("#max_price_search").val() || $('input[name="maxPrice"]:checked').val() || '';
    const minPrice = $("#min_price_search").val() || $('input[name="minPrice"]:checked').val() || '';
    const search = $("#search-name").val() || '';

    // Lưu lựa chọn vào `localStorage`
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories));
    localStorage.setItem("selectedBrands", JSON.stringify(selectedBrands));
    localStorage.setItem("maxPrice", maxPrice);
    localStorage.setItem("minPrice", minPrice);

    // Tạo URL với các tham số
    const queryParams = new URLSearchParams({
        PageIndex: 1,
        PageSize: 6,
        idCategories: selectedCategories.join(','),
        idHangs: selectedBrands.join(','),
        maxPrice: maxPrice,
        minPrice: minPrice,
        search: search
    });

    window.location.href = `/Home/AllProduct2?${queryParams.toString()}`;
}