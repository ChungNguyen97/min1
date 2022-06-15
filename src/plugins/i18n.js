import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    header: {
      home: 'home',
      product: 'product',
      tag: 'tag',
      login: 'login',
      logout: 'logout'
    },
    homePage: {
      title: 'Home page',
      instruction: 'See a list of products at',
      to: 'Product Page'
    },
    productPage: {
      title: 'PRODUCT LIST',
      warnLogin: 'You need to login to view product list.',
      need: 'Log in now'
    },
    productSearch: {
      label: 'Enter search text: ',
      search: 'Search',
      clear: 'Clear',
      suggest: 'Suggest',
      speak: 'Click to Speak',
      placeholder: 'Enter the search text ...'
    },
    productVendor: {
      title: 'Filter by Vendor',
      select: 'Select vendor'
    },
    productCollection: {
      title: 'Filter by Vendor',
      select: 'Select vendor'
    },
    productTable: {
      have: 'There are',
      result: 'results for',
      key: 'Keyword',
      vendor: 'Vendor',
      co: 'Collection',
      th_img: 'Image',
      th_title: 'Title',
      th_price: 'Price',
      th_pro: 'Product',
      th_ven: 'Vendor'
    },
    productDetail: {
      title: 'Product detail page',
      update: 'Update Infomation',
      confirmTitle: 'Ban co chac muon thay doi du lieu',
      cancel: 'Cancle',
      ok: 'OK',
      updating: 'Updating changes...',
      windown: 'Window will close automatically after',
      s: 'seconds',
      close: 'CLOSE',
      clear: 'CLEAR',
      next: 'NEXT',
      confirm: 'Are you sure you want to remove the tag'
    },
    updateTitle: {
      title: 'Update title',
    },
    updatePrice: {
      title: 'Update Price',
      select: 'Select variant you want change price',
      cP: 'Current price',
      tV: 'Title Variant',
      aM: 'Amount',
      pC: 'Percent',
      oP: 'Oparator',
      placeholderAmount: 'Enter amount number...',
      placeholderPercent: 'Enter percent number...'
    },
    addTag: {
      title: 'Add Tag',
      placeholder: 'Enter your tag name ...'
    },
    removeTag: {
      title: 'Remove tag',
      selectAll: 'Select all',
      resetAll: 'Reset Select tag'
    },
    detailImage: {
      title: 'Variant'
    },
    detailText: {
      type: 'Variant',
      price: 'Price',
      tag: 'Tags'
    },
    tagSetting: {
      title: 'Update window',
      auto: 'Automatically close the window after the update is done',
      noAuto: 'Do not automatically close the window',
      autoAfter: 'Close the window after',
      second: 'seconds',
      msg: 'Notifications',
      showMsg: 'Show notification every time remove tag',
      noShowMsg: 'Not showing notification every time remove tag',
      cancle: 'Cancel',
      save: 'Save',
    },
    supportPage: {
      title: 'Instructions for updating information ?',
    }




  },
  'vi': {
    header: {
      home: 'trang chủ',
      product: 'sản phẩm',
      tag: 'thẻ',
      login: 'ĐĂNG NHẬP',
      logout: 'ĐĂNG XUẤT'
    },
    homePage: {
      title: 'Trang chủ',
      instruction: 'Xem danh sách các sản phẩm tại',
      to: 'Trang sản phẩm'
    },
    productPage: {
      title: 'DANH SÁCH SẢN PHẨM',
      warnLogin: 'Bạn cần đăng nhập để xem danh sách sản phẩm',
      need: 'Đăng nhập ngay'
    },
    productSearch: {
      label: 'Nhập văn bản tìm kiếm: ',
      search: 'Tìm kiếm',
      clear: 'Xóa',
      suggest: 'Đề xuất',
      speak: 'Bấm để nói',
      placeholder: 'Nhập nội dung tìm kiếm của bạn ...'
    },
    productVendor: {
      title: 'Lọc theo nhà cung cấp',
      select: 'Chọn nhà cung cấp'
    },
    productCollection: {
      title: 'Lọc theo bộ sự tập',
      select: 'Chọn bộ sưu tập'
    },
    productTable: {
      have: 'Có',
      result: 'kết quả cho',
      key: 'từ khóa',
      vendor: 'Vendor',
      co: 'Collection',
      th_img: 'Image',
      th_title: 'Title',
      th_price: 'Price',
      th_pro: 'Product',
      th_ven: 'Vendor'
    },
    productDetail: {
      title: 'Trang chi tiết sản phẩm',
      update: 'Cập nhật dữ liệu',
      confirmTitle: 'Bạn có chắc muốn thay đổi dữ liệu',
      cancel: 'Hủy',
      ok: 'Đồng ý',
      updating: 'Đang thực hiện cập nhật dữ liệu',
      windown: 'Cửa sổ cập nhật sẽ tự động đóng sau',
      s: 'giây',
      close: 'Đóng',
      clear: 'Xóa dữ liệu đã nhập',
      next: 'Tiếp tục',
      confirm: 'Bạn có chắc muốn xóa thẻ'
    },
    updateTitle: {
      title: 'Cập nhật tiêu đề',
    },
    updatePrice: {
      title: 'Cập nhật giá',
      select: 'Chọn loại sản phẩm mà bạn muốn cập nhật giá',
      cP: 'Giá hiện tại',
      tV: 'Tiêu đề của sản phẩm',
      aM: 'Số lượng',
      pC: 'Phần trăm',
      oP: 'Toán tử',
      placeholderAmount: 'Nhập số lượng muốn thay đổi...',
      placeholderPercent: 'Nhập phần trăm muốn thay đổi...'
    },
    addTag: {
      title: 'Thêm thẻ',
      placeholder: 'Nhập tên thẻ ...'
    },
    removeTag: {
      title: 'Xóa thẻ',
      selectAll: 'Chọn tất cả',
      resetAll: 'Bỏ chọn'
    },
    detailImage: {
      title: 'Chọn loại sản phẩm'
    },
    detailText: {
      type: 'Loại sản phẩm',
      price: 'Giá',
      tag: 'Thẻ'
    },
    tagSetting: {
      title: 'Cửa số cập nhật',
      auto: 'Tự động đóng cửa sổ sau khi cập nhật thành công',
      noAuto: 'Không tự động đóng cửa sổ sau khi cập nhật thành công',
      autoAfter: 'Đóng cửa sổ sau',
      second: 'giây',
      msg: 'Thông báo',
      showMsg: 'Hiện thông báo mỗi khi xóa thẻ',
      noShowMsg: 'Không hiện thông báo mỗi khi xóa thẻ',
      cancle: 'Hủy',
      save: 'Lưu',
    },
    supportPage: {
      title: 'Hướng dẫn cập nhật thông tin ?',
    }


  },
  'cn': {
    header: {
      home: '主页',
      product: '产品',
      tag: '卡片',
      login: '登入',
      logout: '登记'
    },
    homePage: {
      title: '主页',
      instruction: '查看产品列表',
      to: '产品页面'
    },
    productPage: {
      title: '产品清单',
      warnLogin: '您需要登录才能查看产品列表',
      need: '立即登入'
    },
    productSearch: {
      label: '输入搜索文本: ',
      search: '搜索',
      clear: '擦除',
      suggest: '提供',
      speak: '点击发言',
      placeholder: '输入您的搜索文本 ...'
    },
    productVendor: {
      title: '按供应商筛选',
      select: '选择供应商'
    },
    productCollection: {
      title: '按训练集过滤',
      select: '选择一组练习'
    },
    productTable: {
      have: '有',
      result: '结果',
      key: '关键词',
      vendor: 'Vendor',
      co: 'Collection',
      th_img: '图片',
      th_title: '标题',
      th_price: '价格',
      th_pro: '产品',
      th_ven: '供应商'
    },
    productDetail: {
      title: '产品详情页面',
      update: '更新数据',
      confirmTitle: '您确定要更改数据吗',
      cancel: '取消',
      ok: '同意',
      updating: '正在更新数据',
      windown: '更新窗口会自动关闭',
      s: '第二',
      close: '关',
      clear: '删除输入的数据',
      next: '继续',
      confirm: '您确定要删除标签吗'
    },
    updateTitle: {
      title: '更新标题',
    },
    updatePrice: {
      title: '更新价格',
      select: '选择您要更新价格的产品类型',
      cP: '时价',
      tV: '产品名称',
      aM: '数量',
      pC: '百分',
      oP: '数学运算符',
      placeholderAmount: '输入您要更改的数量...',
      placeholderPercent: '输入要更改的百分比...'
    },
    addTag: {
      title: '添加卡',
      placeholder: '输入您要添加的标签的名称...'
    },
    removeTag: {
      title: '移除卡',
      selectAll: '全选',
      resetAll: '未选中'
    },
    detailImage: {
      title: '选择产品类型'
    },
    detailText: {
      type: '产品类别',
      price: '价格',
      tag: '卡片'
    },
    tagSetting: {
      title: '更新窗口',
      auto: '更新成功后自动关闭窗口',
      noAuto: '更新成功后不自动关闭窗口',
      autoAfter: '关闭以下窗口',
      second: '第二',
      msg: '通知',
      showMsg: '每次删除卡片时显示通知',
      noShowMsg: '每次删除卡时不显示通知',
      cancle: '取消',
      save: '节省',
    },
    supportPage: {
      title: '信息更新说明 ?',
    }
  }
};


const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;