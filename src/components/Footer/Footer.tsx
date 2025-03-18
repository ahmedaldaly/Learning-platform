import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#060642] text-white py-12 mt-20">
            <div className="container mx-auto px-6">
                {/* أعلى الفوتر: روابط سريعة ووسائل التواصل الاجتماعي */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* القسم الأول: معلومات المنصة */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">منصة التعليم</h2>
                        <p className="text-gray-300">
                            منصة تعليمية رائدة تهدف إلى تقديم محتوى تعليمي عالي الجودة لمساعدة الطلاب على تحقيق أهدافهم.
                        </p>
                    </div>

                    {/* القسم الثاني: روابط سريعة */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">الرئيسية</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">الدورات</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">المدربون</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">اتصل بنا</a></li>
                        </ul>
                    </div>

                    {/* القسم الثالث: معلومات الاتصال */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">اتصل بنا</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>العنوان: مدينة الرياض، السعودية</li>
                            <li>البريد الإلكتروني: info@example.com</li>
                            <li>الهاتف: +966 123 456 789</li>
                        </ul>
                    </div>

                    {/* القسم الرابع: وسائل التواصل الاجتماعي */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* أسفل الفوتر: حقوق النشر */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © {new Date().getFullYear()} منصة التعليم. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;