function ChonDanhMuc2() {
    try {
        const selectedValues = [];
        const maxPrice = $("#max_price_search").val() || '';
        const minPrice = $("#min_price_search").val() || '';
        const search = $("#search-name").val() || '';

        // Lưu các danh mục đã chọn vào mảng `selectedValues`
        $('input[name="category"]:checked').each(function () {
            selectedValues.push($(this).val());
        });

        // Lưu danh mục đã chọn vào localStorage
        localStorage.setItem("selectedCategories", JSON.stringify(selectedValues));

        // Tạo URL với các tham số tìm kiếm và lọc
        const queryParams = new URLSearchParams({
            PageIndex: 1,
            PageSize: 6,
            idCategories: selectedValues.join(','),
            maxPrice: maxPrice,
            minPrice: minPrice,
            search: search
        });

        // Chuyển hướng đến `AllProduct2` với các tham số
        window.location.href = `/Home/AllProduct2?${queryParams.toString()}`;
    } catch (error) {
        console.error("Lỗi trong hàm ChonDanhMuc2:", error);
    }
}
