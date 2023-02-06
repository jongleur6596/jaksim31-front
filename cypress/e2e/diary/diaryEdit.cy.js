describe('Diary Edit Test', () => {

    beforeEach(() => {
        // 로그인
        cy.visit('/home/landing');
        cy.wait(2000);
        cy.get('[data-testid="title"]', { timeout: 30000 }).should('be.visible');
        cy.get('[data-testid="startButton"]', { timeout: 30000 }).click();
        cy.wait(1500);
        cy.get('[data-testid="loginModal"]').should('be.visible');
        cy.get('[data-testid="loginEmailInput"]').clear();
        cy.get('[data-testid="loginEmailInput"]').type('test@sweep.com');
        cy.get('[data-testid="passwordInput"]').clear();
        cy.get('[data-testid="passwordInput"]').type('test1234!');
        cy.wait(1000);
        cy.get('[data-testid="loginSubmitButton"]', { timeout: 30000 }).click();

        // 일기 목록 페이지로 이동 
        cy.wait(2000);
        cy.get('[data-testid="drawerButton"]', { timeout: 30000 }).should('be.visible');
        cy.wait(1500);
        cy.get('[data-testid="drawerButton"]', { timeout: 30000 }).click();
        cy.wait(3000);
        cy.get('[data-testid="📅  일기 목록"] > .w-full', { timeout: 30000 }).click();
        cy.wait(2000);
        
        // 썸네일 목록으로 이동
        cy.get('[data-testid="gridListTab"]', { timeout: 30000 }).should('be.visible');
        cy.get('[data-testid="gridListTab"]', { timeout: 30000 }).click();
        cy.wait(1500);
    });

    it('Modify & Delete Diary', function() {
        
        // 일기 수정        
        cy.get('.diaryMenuButton', { timeout: 30000 }).click();
        cy.wait(1000);
        cy.get('.diaryModifyButton', { timeout: 30000 }).click();
        cy.wait(1500);
        cy.get('[data-testid="saveDiaryButton"]', { timeout: 30000 }).click();
        cy.wait(2000);
        cy.get('[data-testid="saveDiaryModal"]', { timeout: 30000 }).should('be.visible');
        cy.get('[data-testid="getNewThumbnailButton"]', { timeout: 30000 }).click();
        cy.get('[data-testid="uploadThumbnailButton"]', { timeout: 30000 }).click();
        cy.wait(5000);
        cy.get('.cursor-not-allowed').should('have.text', '썸네일 생성 완료👍', { timeout: 30000 });
        
        cy.get('[data-testid="uploadDiaryButton"]', { timeout: 30000 }).click();
        cy.wait(1500);
        cy.get('[data-testid="closeSaveDiarySuccessModalButton"]', { timeout: 30000 }).click();
        cy.wait(1500);

        
        // 일기 삭제
        cy.get('.diaryMenuButton', { timeout: 30000 }).click();
        cy.wait(1000);
        cy.get('.diaryDeleteButton', { timeout: 30000 }).click();
        cy.wait(1000);
        cy.get('[data-testid="deleteDiaryButton"]', { timeout: 30000 }).click();
        cy.wait(1500);
        cy.get('[data-testid="closeDiaryDeleteSuccessModalButton"]', { timeout: 30000 }).click();
        cy.wait(1500);
    });

//     it('Delete Diary', function() {

//         // 일기 삭제
//         cy.get('.diaryMenuButton', { timeout: 30000 }).click();
//         cy.wait(1000);
//         cy.get('.diaryDeleteButton', { timeout: 30000 }).click();
//         cy.wait(1000);
//         cy.get('[data-testid="deleteDiaryButton"]', { timeout: 30000 }).click();
//         cy.wait(1500);
//         cy.get('[data-testid="closeDiaryDeleteSuccessModalButton"]', { timeout: 30000 }).click();
//         cy.wait(1500);
//     });
})
