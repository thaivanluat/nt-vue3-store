<script setup>
import { ref } from "vue";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";
import { useAlertStore } from "@/stores/alert";
import { useProductStore } from "@/stores/product";
import ProductGridList from "@/components/shop/ProductGridList.vue";
import ProductList from "@/components/shop/ProductList.vue";
import Loading from "@/components/layouts/Loading.vue";

const breadCrumb = "Shop";
const alertStore = useAlertStore();
const productStore = useProductStore();

const products = productStore.products;
const listView = ref("grid");

function setListView(type) {
    listView.value = type;
}
</script>

<template>
    <Breadcrumb :name="breadCrumb" />
    <template v-if="alertStore.loading">
        <Loading />
    </template>
    <template v-else>
        <div class="content-wraper pt-60 pb-60 pt-sm-30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 order-1 order-lg-2">
                        <div class="single-banner shop-page-banner">
                            <a href="#">
                                <img
                                    src="images/bg-banner/2.jpg"
                                    alt="Li's Static Banner"
                                />
                            </a>
                        </div>
                        <div class="shop-top-bar mt-30">
                            <div class="shop-bar-inner">
                                <div class="product-view-mode">
                                    <!-- shop-item-filter-list start -->
                                    <ul
                                        class="nav shop-item-filter-list"
                                        role="tablist"
                                    >
                                        <li
                                            @click="setListView('grid')"
                                            role="presentation"
                                        >
                                            <a
                                                :class="{
                                                    show: listView === 'grid',
                                                    active: listView === 'grid',
                                                }"
                                                href="javascript:void(0);"
                                                aria-selected="false"
                                                role="tab"
                                                aria-controls="grid-view"
                                                ><i class="fa fa-th"></i
                                            ></a>
                                        </li>
                                        <li
                                            @click="setListView('list')"
                                            role="presentation"
                                        >
                                            <a
                                                :class="{
                                                    show: listView === 'list',
                                                    active: listView === 'list',
                                                }"
                                                href="javascript:void(0);"
                                                role="tab"
                                                aria-controls="list-view"
                                                aria-selected="true"
                                                ><i class="fa fa-th-list"></i
                                            ></a>
                                        </li>
                                    </ul>
                                    <!-- shop-item-filter-list end -->
                                </div>
                                <div class="toolbar-amount">
                                    <!-- <span>Showing 1 to 9 of 15</span> -->
                                </div>
                            </div>
                        </div>

                        <div class="shop-products-wrapper">
                            <template v-if="listView === 'grid'">
                                <ProductGridList :products="products" />
                            </template>
                            <template v-if="listView === 'list'">
                                <ProductList :products="products" />
                            </template>
                        </div>
                    </div>
                    <div class="col-lg-3 order-2 order-lg-1">
                        <!--sidebar-categores-box start  -->
                        <div class="sidebar-categores-box mt-sm-30 mt-xs-30">
                            <div class="sidebar-title">
                                <h2>Laptop</h2>
                            </div>
                            <!-- category-sub-menu start -->
                            <div class="category-sub-menu">
                                <ul>
                                    <li class="has-sub">
                                        <a href="# ">Prime Video</a>
                                        <ul>
                                            <li><a href="#">All Videos</a></li>
                                            <li><a href="#">Blouses</a></li>
                                            <li>
                                                <a href="#">Evening Dresses</a>
                                            </li>
                                            <li>
                                                <a href="#">Summer Dresses</a>
                                            </li>
                                            <li>
                                                <a href="#">T-Rent or Buy</a>
                                            </li>
                                            <li>
                                                <a href="#">Your Watchlist</a>
                                            </li>
                                            <li>
                                                <a href="#">Watch Anywhere</a>
                                            </li>
                                            <li>
                                                <a href="#">Getting Started</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-sub">
                                        <a href="#">Computer</a>
                                        <ul>
                                            <li>
                                                <a href="#">TV &amp; Video</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    >Audio &amp; Theater</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#">Camera, Photo</a>
                                            </li>
                                            <li><a href="#">Cell Phones</a></li>
                                            <li><a href="#">Headphones</a></li>
                                            <li><a href="#">Video Games</a></li>
                                            <li>
                                                <a href="#"
                                                    >Wireless Speakers</a
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="has-sub">
                                        <a href="#">Electronics</a>
                                        <ul>
                                            <li><a href="#">Amazon Home</a></li>
                                            <li>
                                                <a href="#"
                                                    >Kitchen &amp; Dining</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#">Bed &amp; Bath</a>
                                            </li>
                                            <li><a href="#">Appliances</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <!-- category-sub-menu end -->
                        </div>
                        <!--sidebar-categores-box end  -->
                        <!--sidebar-categores-box start  -->
                        <div class="sidebar-categores-box">
                            <div class="sidebar-title">
                                <h2>Filter By</h2>
                            </div>
                            <!-- btn-clear-all start -->
                            <button class="btn-clear-all mb-sm-30 mb-xs-30">
                                Clear all
                            </button>
                            <!-- btn-clear-all end -->
                            <!-- filter-sub-area start -->
                            <div class="filter-sub-area">
                                <h5 class="filter-sub-titel">Brand</h5>
                                <div class="categori-checkbox">
                                    <form action="#">
                                        <ul>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#"
                                                    >Prime Video (13)</a
                                                >
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#">Computers (12)</a>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#"
                                                    >Electronics (11)</a
                                                >
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <!-- filter-sub-area end -->
                            <!-- filter-sub-area start -->
                            <div class="filter-sub-area pt-sm-10 pt-xs-10">
                                <h5 class="filter-sub-titel">Categories</h5>
                                <div class="categori-checkbox">
                                    <form action="#">
                                        <ul>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#"
                                                    >Graphic Corner (10)</a
                                                >
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#">
                                                    Studio Design (6)</a
                                                >
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <!-- filter-sub-area end -->
                            <!-- filter-sub-area start -->
                            <div class="filter-sub-area pt-sm-10 pt-xs-10">
                                <h5 class="filter-sub-titel">Size</h5>
                                <div class="size-checkbox">
                                    <form action="#">
                                        <ul>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-size"
                                                /><a href="#">S (3)</a>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-size"
                                                /><a href="#">M (3)</a>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-size"
                                                /><a href="#">L (3)</a>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-size"
                                                /><a href="#">XL (3)</a>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <!-- filter-sub-area end -->
                            <!-- filter-sub-area start -->
                            <div class="filter-sub-area pt-sm-10 pt-xs-10">
                                <h5 class="filter-sub-titel">Color</h5>
                                <div class="color-categoriy">
                                    <form action="#">
                                        <ul>
                                            <li>
                                                <span class="white"></span
                                                ><a href="#">White (1)</a>
                                            </li>
                                            <li>
                                                <span class="black"></span
                                                ><a href="#">Black (1)</a>
                                            </li>
                                            <li>
                                                <span class="Orange"></span
                                                ><a href="#">Orange (3) </a>
                                            </li>
                                            <li>
                                                <span class="Blue"></span
                                                ><a href="#">Blue (2) </a>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <!-- filter-sub-area end -->
                            <!-- filter-sub-area start -->
                            <div
                                class="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15"
                            >
                                <h5 class="filter-sub-titel">Dimension</h5>
                                <div class="categori-checkbox">
                                    <form action="#">
                                        <ul>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#">40x60cm (6)</a>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#">60x90cm (6)</a>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="product-categori"
                                                /><a href="#">80x120cm (6)</a>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <!-- filter-sub-area end -->
                        </div>
                        <!--sidebar-categores-box end  -->
                        <!-- category-sub-menu start -->
                        <div class="sidebar-categores-box mb-sm-0 mb-xs-0">
                            <div class="sidebar-title">
                                <h2>Laptop</h2>
                            </div>
                            <div class="category-tags">
                                <ul>
                                    <li><a href="# ">Devita</a></li>
                                    <li><a href="# ">Cameras</a></li>
                                    <li><a href="# ">Sony</a></li>
                                    <li><a href="# ">Computer</a></li>
                                    <li><a href="# ">Big Sale</a></li>
                                    <li><a href="# ">Accessories</a></li>
                                </ul>
                            </div>
                            <!-- category-sub-menu end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>
