-- CreateTable
CREATE TABLE "Publisher" (
    "id" SERIAL NOT NULL,
    "publisherName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL,
    "yearFounded" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "publicationYear" INTEGER NOT NULL,
    "pages" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "telephoneNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT NOT NULL,
    "telephoneNumber" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "authorName" TEXT NOT NULL,
    "biography" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "paymentType" TEXT NOT NULL,
    "customerId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,
    "ageRestriction" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "totalItems" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_publisherName_key" ON "Publisher"("publisherName");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_bookId_key" ON "Publisher"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "Book_bookTitle_key" ON "Book"("bookTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Book_categoryId_key" ON "Book"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Book_authorId_key" ON "Book"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerName_key" ON "Customer"("customerName");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeName_key" ON "Employee"("employeeName");

-- CreateIndex
CREATE UNIQUE INDEX "Author_authorName_key" ON "Author"("authorName");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_customerId_key" ON "Payment"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_bookId_key" ON "Payment"("bookId");

-- AddForeignKey
ALTER TABLE "Publisher" ADD CONSTRAINT "Publisher_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
